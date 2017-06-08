/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2006Component } from './comp-2006.component';

describe('Comp2006Component', () => {
  let component: Comp2006Component;
  let fixture: ComponentFixture<Comp2006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
