/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1367Component } from './comp-1367.component';

describe('Comp1367Component', () => {
  let component: Comp1367Component;
  let fixture: ComponentFixture<Comp1367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
