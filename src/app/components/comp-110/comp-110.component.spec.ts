/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp110Component } from './comp-110.component';

describe('Comp110Component', () => {
  let component: Comp110Component;
  let fixture: ComponentFixture<Comp110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
