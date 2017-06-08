/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2249Component } from './comp-2249.component';

describe('Comp2249Component', () => {
  let component: Comp2249Component;
  let fixture: ComponentFixture<Comp2249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
