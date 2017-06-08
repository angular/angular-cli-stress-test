/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3114Component } from './comp-3114.component';

describe('Comp3114Component', () => {
  let component: Comp3114Component;
  let fixture: ComponentFixture<Comp3114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
