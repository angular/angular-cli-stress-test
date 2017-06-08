/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2182Component } from './comp-2182.component';

describe('Comp2182Component', () => {
  let component: Comp2182Component;
  let fixture: ComponentFixture<Comp2182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
