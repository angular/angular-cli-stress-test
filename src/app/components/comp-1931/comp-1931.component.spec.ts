/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1931Component } from './comp-1931.component';

describe('Comp1931Component', () => {
  let component: Comp1931Component;
  let fixture: ComponentFixture<Comp1931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
