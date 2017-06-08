/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3648Component } from './comp-3648.component';

describe('Comp3648Component', () => {
  let component: Comp3648Component;
  let fixture: ComponentFixture<Comp3648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
