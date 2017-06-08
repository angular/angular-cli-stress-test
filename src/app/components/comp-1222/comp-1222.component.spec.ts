/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1222Component } from './comp-1222.component';

describe('Comp1222Component', () => {
  let component: Comp1222Component;
  let fixture: ComponentFixture<Comp1222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
