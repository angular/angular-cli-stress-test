/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1750Component } from './comp-1750.component';

describe('Comp1750Component', () => {
  let component: Comp1750Component;
  let fixture: ComponentFixture<Comp1750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
