/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1810Component } from './comp-1810.component';

describe('Comp1810Component', () => {
  let component: Comp1810Component;
  let fixture: ComponentFixture<Comp1810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
