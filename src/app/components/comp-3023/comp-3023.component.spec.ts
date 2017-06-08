/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3023Component } from './comp-3023.component';

describe('Comp3023Component', () => {
  let component: Comp3023Component;
  let fixture: ComponentFixture<Comp3023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
