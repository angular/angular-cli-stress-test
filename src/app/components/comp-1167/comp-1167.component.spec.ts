/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1167Component } from './comp-1167.component';

describe('Comp1167Component', () => {
  let component: Comp1167Component;
  let fixture: ComponentFixture<Comp1167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
