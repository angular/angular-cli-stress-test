/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4363Component } from './comp-4363.component';

describe('Comp4363Component', () => {
  let component: Comp4363Component;
  let fixture: ComponentFixture<Comp4363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
