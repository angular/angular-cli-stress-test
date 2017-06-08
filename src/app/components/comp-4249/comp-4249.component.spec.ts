/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4249Component } from './comp-4249.component';

describe('Comp4249Component', () => {
  let component: Comp4249Component;
  let fixture: ComponentFixture<Comp4249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
