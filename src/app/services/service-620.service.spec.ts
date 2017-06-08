/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service620Service } from './service-620.service';

describe('Service620Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service620Service]
    });
  });

  it('should ...', inject([Service620Service], (service: Service620Service) => {
    expect(service).toBeTruthy();
  }));
});
