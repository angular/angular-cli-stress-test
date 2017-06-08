/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service386Service } from './service-386.service';

describe('Service386Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service386Service]
    });
  });

  it('should ...', inject([Service386Service], (service: Service386Service) => {
    expect(service).toBeTruthy();
  }));
});
