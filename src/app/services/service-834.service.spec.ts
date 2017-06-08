/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service834Service } from './service-834.service';

describe('Service834Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service834Service]
    });
  });

  it('should ...', inject([Service834Service], (service: Service834Service) => {
    expect(service).toBeTruthy();
  }));
});
