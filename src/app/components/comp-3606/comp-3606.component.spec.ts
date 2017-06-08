/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3606Component } from './comp-3606.component';

describe('Comp3606Component', () => {
  let component: Comp3606Component;
  let fixture: ComponentFixture<Comp3606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
