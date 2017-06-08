/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1875Component } from './comp-1875.component';

describe('Comp1875Component', () => {
  let component: Comp1875Component;
  let fixture: ComponentFixture<Comp1875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
