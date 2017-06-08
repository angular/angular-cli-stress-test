/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1190Component } from './comp-1190.component';

describe('Comp1190Component', () => {
  let component: Comp1190Component;
  let fixture: ComponentFixture<Comp1190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
