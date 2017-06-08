/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1737Component } from './comp-1737.component';

describe('Comp1737Component', () => {
  let component: Comp1737Component;
  let fixture: ComponentFixture<Comp1737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
