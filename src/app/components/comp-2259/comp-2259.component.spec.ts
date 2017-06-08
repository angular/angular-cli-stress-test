/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2259Component } from './comp-2259.component';

describe('Comp2259Component', () => {
  let component: Comp2259Component;
  let fixture: ComponentFixture<Comp2259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
