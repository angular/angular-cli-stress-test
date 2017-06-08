/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp316Component } from './comp-316.component';

describe('Comp316Component', () => {
  let component: Comp316Component;
  let fixture: ComponentFixture<Comp316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
