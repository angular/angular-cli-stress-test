/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4457Component } from './comp-4457.component';

describe('Comp4457Component', () => {
  let component: Comp4457Component;
  let fixture: ComponentFixture<Comp4457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
