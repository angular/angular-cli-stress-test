/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3452Component } from './comp-3452.component';

describe('Comp3452Component', () => {
  let component: Comp3452Component;
  let fixture: ComponentFixture<Comp3452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
