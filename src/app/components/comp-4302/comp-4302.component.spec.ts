/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4302Component } from './comp-4302.component';

describe('Comp4302Component', () => {
  let component: Comp4302Component;
  let fixture: ComponentFixture<Comp4302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
