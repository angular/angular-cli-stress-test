/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp543Component } from './comp-543.component';

describe('Comp543Component', () => {
  let component: Comp543Component;
  let fixture: ComponentFixture<Comp543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
