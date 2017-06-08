/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2715Component } from './comp-2715.component';

describe('Comp2715Component', () => {
  let component: Comp2715Component;
  let fixture: ComponentFixture<Comp2715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
