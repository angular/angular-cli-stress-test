/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4220Component } from './comp-4220.component';

describe('Comp4220Component', () => {
  let component: Comp4220Component;
  let fixture: ComponentFixture<Comp4220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
