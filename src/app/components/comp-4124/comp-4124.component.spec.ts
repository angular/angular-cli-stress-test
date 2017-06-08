/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4124Component } from './comp-4124.component';

describe('Comp4124Component', () => {
  let component: Comp4124Component;
  let fixture: ComponentFixture<Comp4124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
