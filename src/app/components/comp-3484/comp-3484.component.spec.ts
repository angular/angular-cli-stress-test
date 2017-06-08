/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3484Component } from './comp-3484.component';

describe('Comp3484Component', () => {
  let component: Comp3484Component;
  let fixture: ComponentFixture<Comp3484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
