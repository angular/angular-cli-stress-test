/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2324Component } from './comp-2324.component';

describe('Comp2324Component', () => {
  let component: Comp2324Component;
  let fixture: ComponentFixture<Comp2324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
