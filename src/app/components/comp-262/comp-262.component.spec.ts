/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp262Component } from './comp-262.component';

describe('Comp262Component', () => {
  let component: Comp262Component;
  let fixture: ComponentFixture<Comp262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
