/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2131Component } from './comp-2131.component';

describe('Comp2131Component', () => {
  let component: Comp2131Component;
  let fixture: ComponentFixture<Comp2131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
