/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3033Component } from './comp-3033.component';

describe('Comp3033Component', () => {
  let component: Comp3033Component;
  let fixture: ComponentFixture<Comp3033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
