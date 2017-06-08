/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1698Component } from './comp-1698.component';

describe('Comp1698Component', () => {
  let component: Comp1698Component;
  let fixture: ComponentFixture<Comp1698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
