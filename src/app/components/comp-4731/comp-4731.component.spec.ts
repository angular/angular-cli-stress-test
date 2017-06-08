/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4731Component } from './comp-4731.component';

describe('Comp4731Component', () => {
  let component: Comp4731Component;
  let fixture: ComponentFixture<Comp4731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
