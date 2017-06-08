/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp202Component } from './comp-202.component';

describe('Comp202Component', () => {
  let component: Comp202Component;
  let fixture: ComponentFixture<Comp202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
