/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1856Component } from './comp-1856.component';

describe('Comp1856Component', () => {
  let component: Comp1856Component;
  let fixture: ComponentFixture<Comp1856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
