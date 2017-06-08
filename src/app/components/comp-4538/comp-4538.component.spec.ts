/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4538Component } from './comp-4538.component';

describe('Comp4538Component', () => {
  let component: Comp4538Component;
  let fixture: ComponentFixture<Comp4538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
