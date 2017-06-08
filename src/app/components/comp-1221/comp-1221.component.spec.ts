/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1221Component } from './comp-1221.component';

describe('Comp1221Component', () => {
  let component: Comp1221Component;
  let fixture: ComponentFixture<Comp1221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
