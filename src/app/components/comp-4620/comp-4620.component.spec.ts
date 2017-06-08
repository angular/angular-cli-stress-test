/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4620Component } from './comp-4620.component';

describe('Comp4620Component', () => {
  let component: Comp4620Component;
  let fixture: ComponentFixture<Comp4620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
