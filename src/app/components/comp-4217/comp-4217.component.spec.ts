/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4217Component } from './comp-4217.component';

describe('Comp4217Component', () => {
  let component: Comp4217Component;
  let fixture: ComponentFixture<Comp4217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
