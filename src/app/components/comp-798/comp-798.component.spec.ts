/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp798Component } from './comp-798.component';

describe('Comp798Component', () => {
  let component: Comp798Component;
  let fixture: ComponentFixture<Comp798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
