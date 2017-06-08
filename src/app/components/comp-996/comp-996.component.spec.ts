/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp996Component } from './comp-996.component';

describe('Comp996Component', () => {
  let component: Comp996Component;
  let fixture: ComponentFixture<Comp996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
