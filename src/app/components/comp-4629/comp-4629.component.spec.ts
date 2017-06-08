/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4629Component } from './comp-4629.component';

describe('Comp4629Component', () => {
  let component: Comp4629Component;
  let fixture: ComponentFixture<Comp4629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
