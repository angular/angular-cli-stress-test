/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4846Component } from './comp-4846.component';

describe('Comp4846Component', () => {
  let component: Comp4846Component;
  let fixture: ComponentFixture<Comp4846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
