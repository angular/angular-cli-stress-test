/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4820Component } from './comp-4820.component';

describe('Comp4820Component', () => {
  let component: Comp4820Component;
  let fixture: ComponentFixture<Comp4820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
