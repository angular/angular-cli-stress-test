/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1112Component } from './comp-1112.component';

describe('Comp1112Component', () => {
  let component: Comp1112Component;
  let fixture: ComponentFixture<Comp1112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
