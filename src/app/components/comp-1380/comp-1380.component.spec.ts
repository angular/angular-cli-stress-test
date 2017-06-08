/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1380Component } from './comp-1380.component';

describe('Comp1380Component', () => {
  let component: Comp1380Component;
  let fixture: ComponentFixture<Comp1380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
