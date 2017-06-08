/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3091Component } from './comp-3091.component';

describe('Comp3091Component', () => {
  let component: Comp3091Component;
  let fixture: ComponentFixture<Comp3091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});