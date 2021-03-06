/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1418Component } from './comp-1418.component';

describe('Comp1418Component', () => {
  let component: Comp1418Component;
  let fixture: ComponentFixture<Comp1418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
