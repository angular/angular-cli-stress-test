/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2405Component } from './comp-2405.component';

describe('Comp2405Component', () => {
  let component: Comp2405Component;
  let fixture: ComponentFixture<Comp2405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
